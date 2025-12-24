import React,
{
useState
}

from "react";
import "./PoliciesPage.css";

const PoliciesPage=()=> {
    const [activeSection,
    setActiveSection]=useState("privacy");

    const scrollToSection=(id)=> {
        setActiveSection(id);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
}

;

return (<div className="policies-page" > {
        /* Header */
    }

    <header className="policies-header" > <div className="policies-header-content" > <h1>Legal & Data Policies</h1> <p>Clear, transparent, and respectful handling of data</p> </div> </header> {
        /* Navigation */
    }

    <nav className="policies-nav" > <div className="policies-nav-container" > {

        [ ["privacy", "Privacy Policy"],
        ["terms", "Terms of Service"],
        ["consent", "Data & Consent"],
        ["retention", "Data Retention"],
        ["security", "Security Policy"],
        ].map(([id, label])=> (<button key= {
                    id
                }

                className= {
                    activeSection===id ? "active" : ""
                }

                onClick= {
                    ()=> scrollToSection(id)
                }

                > {
                    label
                }

                </button>))
    }

    </div> </nav> {
        /* Content */
    }

    <main className="policies-content" > {
        /* ===== PRIVACY ===== */
    }

    <section id="privacy" className="policy-section" > <h2>Privacy Policy</h2> <p className="last-updated" >Last Updated: December 24, 2024</p> <div className="policy-block" > <h3>1. Introduction</h3> <p> DeenDesk is committed to protecting personal data and handling it responsibly in accordance with Indian law. </p> </div> <div className="policy-block" > <h3>2. Data We Collect</h3> <ul> <li>Admin email address</li> <li>Member name, phone number, profession</li> <li>Local address (with permission)</li> </ul> <div className="important-note" > <strong>Note:</strong> Admins must obtain consent before entering member data. </div> </div> <div className="policy-block" > <h3>3. Purpose of Collection</h3> <ul> <li>Masjid administration</li> <li>Member management</li> <li>Official communication</li> </ul> </div> </section> {
        /* ===== TERMS ===== */
    }

    <section id="terms" className="policy-section" > <h2>Terms of Service</h2> <p className="last-updated" >Last Updated: December 24, 2024</p> <div className="policy-block" > <h3>1. Usage</h3> <p> DeenDesk is intended for authorized masjid committees and admins. </p> </div> <div className="policy-block" > <h3>2. Admin Responsibility</h3> <ul> <li>Accuracy of data</li> <li>Consent compliance</li> <li>Account security</li> </ul> </div> <div className="policy-block" > <h3>3. Governing Law</h3> <p> These terms are governed by the laws of India. </p> </div> </section> {
        /* ===== CONSENT ===== */
    }

    <section id="consent" className="policy-section" > <h2>Data Collection & Consent</h2> <p className="last-updated" >Last Updated: December 24, 2024</p> <div className="policy-block" > <h3>Admin Obligations</h3> <ul> <li>Inform members clearly</li> <li>Collect data only with permission</li> <li>Respect deletion requests</li> </ul> </div> </section> {
        /* ===== RETENTION ===== */
    }

    <section id="retention" className="policy-section" > <h2>Data Retention & Deletion</h2> <p className="last-updated" >Last Updated: December 24, 2024</p> <div className="policy-block" > <ul> <li>Data retained while account is active</li> <li>Deleted permanently after account closure</li> <li>Backup retention up to 90 days</li> </ul> </div> </section> {
        /* ===== SECURITY ===== */
    }

    <section id="security" className="policy-section" > <h2>Security Policy</h2> <p className="last-updated" >Last Updated: December 24, 2024</p> <div className="policy-block" > <ul> <li>Secure servers</li> <li>Encrypted communication</li> <li>Restricted access</li> <li>Incident response process</li> </ul> </div> </section> </main> {
        /* Footer */
    }

    <footer className="policies-footer" > <p> Questions? Contact {
        " "
    }

    <a href="mailto:legal@deendesk.com" >legal@deendesk.com</a> </p> </footer> </div>);
}

;

export default PoliciesPage;