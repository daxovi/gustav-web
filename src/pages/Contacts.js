import React from 'react'
import "./Contacts.css";

import TextPage from '../components/TextPage';

const Contacts = () => {
    return (
        <TextPage>
            <div>
                <h2>contacts</h2>
                <p>As the developer of the Gustav Timer and Gustav Weights apps, I am dedicated to providing the best possible user experience. Your feedback, questions, and concerns are invaluable to me, and I encourage you to reach out at any time. Whether you have suggestions for new features, need assistance with the app, or simply want to share your thoughts, I am here to listen and help.</p>

                <p>Dalibor Janeček<br />
                    e-mail: <a href="mailto:gustav@daliborjanecek.cz">gustav@daliborjanecek.cz</a></p>
            </div>
        </TextPage >
    )
}

export default Contacts