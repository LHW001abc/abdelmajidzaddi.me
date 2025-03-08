import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formHover, setFormHover] = useState(false);

  /**
   * Handle input change
   * @param e - event object
   */
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submission
   * @param e - event object
   */
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Send form data to the server
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Handle success
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle error
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Check if a field has value for animation purposes
  const hasValue = (fieldName: string) => {
    return formData[fieldName as keyof typeof formData]?.length > 0;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className={`absolute -left-20 -bottom-20 w-40 h-40 bg-blue-200/10 dark:bg-blue-400/10 rounded-full blur-xl transition-all duration-700 ${formHover ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
      <div className={`absolute -right-20 -top-20 w-40 h-40 bg-indigo-200/10 dark:bg-indigo-400/10 rounded-full blur-xl transition-all duration-700 ${formHover ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
      <div className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200/5 dark:bg-purple-400/5 rounded-full blur-xl transition-all duration-700 ${formHover ? 'scale-150 opacity-80' : 'scale-100 opacity-0'}`}></div>
      
      <ToastContainer 
        position="top-center" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <form 
        className="w-full max-w-lg mx-auto relative z-10 overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800/90 p-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transition-all duration-500 hover:shadow-xl dark:hover:shadow-blue-900/20"
        onSubmit={handleSubmit}
        onMouseEnter={() => setFormHover(true)}
        onMouseLeave={() => setFormHover(false)}
        style={{
          transform: formHover ? 'translateY(-4px)' : 'translateY(0px)'
        }}
      >
        {/* Form header with subtle glow */}
        <div className={`mb-6 text-center transition-all duration-500 ${formHover ? 'scale-105' : 'scale-100'}`}>
          <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Get In Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
            I'll get back to you as soon as possible
          </p>
          <div className={`h-0.5 w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ${formHover ? 'w-32 opacity-100' : 'opacity-70'}`}></div>
        </div>

        <div className="-mx-2 md:items-center md:flex space-y-4 md:space-y-0">
          <div className="flex-1 px-2">
            <div className="relative">
              <label 
                className={`
                  block text-sm transition-all duration-300
                  ${focusedField === 'name' || hasValue('name') ? 
                    'text-blue-600 dark:text-blue-400' : 
                    'text-gray-600 dark:text-gray-200'
                  }
                `}
              >
                Name
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder="Your name" 
                required
                onChange={handleChange} 
                value={formData.name}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`
                  block w-full px-5 py-3 mt-2
                  text-gray-700 placeholder-gray-400 
                  bg-white dark:bg-gray-900/80 
                  border-2 rounded-lg 
                  dark:placeholder-gray-600 dark:text-gray-300 
                  dark:border-gray-700
                  transition-all duration-300
                  ${focusedField === 'name' ? 
                    'border-blue-400 dark:border-blue-500 shadow-md shadow-blue-500/20' : 
                    formHover ? 'border-blue-300/50 dark:border-blue-700/50' : 'border-gray-200 dark:border-gray-700'
                  }
                  focus:outline-none focus:ring-0
                `}
              />
              <span 
                className={`
                  block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
                  transition-all duration-500 mt-0.5
                  ${focusedField === 'name' || hasValue('name') ? 'w-full opacity-100' : formHover ? 'w-1/2 opacity-50' : 'w-0 opacity-0'}
                `}
              ></span>
            </div>
          </div>
          
          <div className="flex-1 px-2">
            <div className="relative">
              <label 
                className={`
                  block text-sm transition-all duration-300
                  ${focusedField === 'email' || hasValue('email') ? 
                    'text-blue-600 dark:text-blue-400' : 
                    'text-gray-600 dark:text-gray-200'
                  }
                `}
              >
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                required
                onChange={handleChange} 
                value={formData.email}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`
                  block w-full px-5 py-3 mt-2
                  text-gray-700 placeholder-gray-400 
                  bg-white dark:bg-gray-900/80 
                  border-2 rounded-lg 
                  dark:placeholder-gray-600 dark:text-gray-300 
                  dark:border-gray-700
                  transition-all duration-300
                  ${focusedField === 'email' ? 
                    'border-blue-400 dark:border-blue-500 shadow-md shadow-blue-500/20' : 
                    formHover ? 'border-blue-300/50 dark:border-blue-700/50' : 'border-gray-200 dark:border-gray-700'
                  }
                  focus:outline-none focus:ring-0
                `}
              />
              <span 
                className={`
                  block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
                  transition-all duration-500 mt-0.5
                  ${focusedField === 'email' || hasValue('email') ? 'w-full opacity-100' : formHover ? 'w-1/2 opacity-50' : 'w-0 opacity-0'}
                `}
              ></span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="relative">
            <label 
              className={`
                block text-sm transition-all duration-300
                ${focusedField === 'subject' || hasValue('subject') ? 
                  'text-blue-600 dark:text-blue-400' : 
                  'text-gray-600 dark:text-gray-200'
                }
              `}
            >
              Subject
            </label>
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required
              onChange={handleChange} 
              value={formData.subject}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className={`
                block w-full px-5 py-3 mt-2
                text-gray-700 placeholder-gray-400 
                bg-white dark:bg-gray-900/80 
                border-2 rounded-lg 
                dark:placeholder-gray-600 dark:text-gray-300 
                dark:border-gray-700
                transition-all duration-300
                ${focusedField === 'subject' ? 
                  'border-blue-400 dark:border-blue-500 shadow-md shadow-blue-500/20' : 
                  formHover ? 'border-blue-300/50 dark:border-blue-700/50' : 'border-gray-200 dark:border-gray-700'
                }
                focus:outline-none focus:ring-0
              `}
            />
            <span 
              className={`
                block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
                transition-all duration-500 mt-0.5
                ${focusedField === 'subject' || hasValue('subject') ? 'w-full opacity-100' : formHover ? 'w-1/2 opacity-50' : 'w-0 opacity-0'}
              `}
            ></span>
          </div>
        </div>
        
        <div className="w-full mt-6">
          <div className="relative">
            <label 
              className={`
                block text-sm transition-all duration-300
                ${focusedField === 'message' || hasValue('message') ? 
                  'text-blue-600 dark:text-blue-400' : 
                  'text-gray-600 dark:text-gray-200'
                }
              `}
            >
              Message
            </label>
            <textarea 
              name="message" 
              placeholder="Your message..." 
              required
              onChange={handleChange} 
              value={formData.message}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`
                block w-full h-32 px-5 py-3 mt-2
                text-gray-700 placeholder-gray-400 
                bg-white dark:bg-gray-900/80 
                border-2 rounded-lg 
                dark:placeholder-gray-600 dark:text-gray-300 
                dark:border-gray-700
                transition-all duration-300
                resize-none
                ${focusedField === 'message' ? 
                  'border-blue-400 dark:border-blue-500 shadow-md shadow-blue-500/20' : 
                  formHover ? 'border-blue-300/50 dark:border-blue-700/50' : 'border-gray-200 dark:border-gray-700'
                }
                focus:outline-none focus:ring-0
              `}
            ></textarea>
            <span 
              className={`
                block h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full
                transition-all duration-500 mt-0.5
                ${focusedField === 'message' || hasValue('message') ? 'w-full opacity-100' : formHover ? 'w-1/2 opacity-50' : 'w-0 opacity-0'}
              `}
            ></span>
          </div>
        </div>

        <button
          disabled={isSubmitting}
          className={`
            relative overflow-hidden w-full px-6 py-3.5 mt-8 text-sm font-medium tracking-wide text-white capitalize
            transition-all duration-500 transform 
            bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
            rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50
            shadow-md hover:shadow-lg hover:shadow-blue-500/30
            ${formHover ? 'scale-105' : 'scale-100'}
          `}
        >
          {/* Button text */}
          <span className="relative z-10">
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              <>Send Message</>
            )}
          </span>
          
          {/* Enhanced button shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 animate-[shine_4s_ease-in-out_infinite]"></div>
        </button>
      </form>

      {/* Enhanced shine effect along the edges */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-lg transition-all duration-500 opacity-0 ${formHover ? 'opacity-60' : ''}`}></div>
    </div>
  );
};

export default ContactForm;