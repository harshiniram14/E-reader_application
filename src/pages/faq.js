import React from "react";
import "../assets/faq.css";
function toggleAnswer(event) {
    event.target.classList.toggle('active');
  }
  
  function Faq() {
    return (
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            How do I create an account?
          </div>
          <div className="faq-answer">
            <p>
              To create an account, click on the "Sign Up" button on the homepage
              and fill in the required information, including your email and
              password. Once submitted, your account will be created.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            Can I read books offline?
          </div>
          <div className="faq-answer">
            <p>
              Yes, you can download books from your library to read them offline.
              Simply navigate to the book you want to read, and click on the
              "Download" button. The book will be saved on your device and can be
              accessed offline.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            How do I purchase a book?
          </div>
          <div className="faq-answer">
            <p>
              To purchase a book, search for the book title or browse through the
              available categories. Once you find the book you want, click on the
              book cover to view its details, and then click on the "Buy Now"
              button. Follow the instructions to complete the purchase.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            How can I contact customer support?
          </div>
          <div className="faq-answer">
            <p>
              If you need assistance or have any questions, you can reach our
              customer support team by emailing support@ereaderapp.com or by
              using the contact form on our website. We are available to help you
              from Monday to Friday, 9 AM to 5 PM.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Faq;