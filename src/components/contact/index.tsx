import { useState } from "react";
import { contacts } from "../../utils/constant";
import { FaCheck, FaTimes } from "react-icons/fa";
import Arrow from "../logoArrow";
import Title from "../title";

const Contact = () => {
    const [toast, setToast] = useState<{ show: boolean; type: 'success' | 'error'; text: string }>({
        show: false,
        type: 'success',
        text: ''
    });

    const showToast = (type: 'success' | 'error', text: string) => {
        setToast({ show: true, type, text });
        setTimeout(() => setToast({ show: false, type, text }), 2000);
    };

    const copyToClipboard = async (txt: string, label: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(txt);
            showToast('success', label);
        } catch (err) {
            showToast('error', 'Failed to copy');
        }
    };

    return (
        <div className="contacts">
            <div className="workExp-title-ctn contact-title-ctn">
                <Title content="Contact here" />
                <Arrow angle={-100} />
            </div>
            <div className="contacts-body">
                {Object.keys(contacts).map((el, idx) => {
                    return (
                        <div
                            onClick={() => copyToClipboard(contacts[el], el)}
                            className="contact contact-hover"
                            key={el + "-" + idx}
                        >
                            <p>{el}</p>
                            <p className="contact-info">{contacts[el]}</p>
                            <span className="tooltip">Click to copy</span>
                        </div>
                    );
                })}
            </div>

            {/* Toast Notification */}
            <div className={`toast-container ${toast.show ? 'show' : ''} ${toast.type}`}>
                <div className="toast-content">
                    <div className="toast-icon">
                        {toast.type === 'success' ? (
                            <FaCheck />
                        ) : (
                            <FaTimes />
                        )}
                    </div>
                    <div>
                        <div className="toast-title">
                            {toast.type === 'success' ? `${toast.text} Copied!` : 'Error!'}
                        </div>
                        <div className="toast-message">
                            {toast.type === 'success' ? 'Saved to clipboard' : toast.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;