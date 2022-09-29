import React from 'react';
import './Faq.css';
const Faq = () => {
    return (
        <div className="faq-container">
            <h2>Some questions answersed</h2>

            <div className="faq-card">
                <h2>How does react works?</h2>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

                    Users can create a representation of a DOM node by declaring the Element function in React.<br>
                    </br>JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.

                    In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.</p>
            </div>
            <div className="faq-card">
                <h2>Props VS States</h2>
                <p><b>Props</b><br></br>
                <li>Props are read-only and immutable</li>
                <li>	Props can be accessed by the child component</li>
                <li>	Props allow you to pass data from one component to other components as an argument.</li>
                <li>Props are used to communicate between components.</li></p>

                <br></br>

                <p><b>States</b><br></br>
                <li>State changes can be asynchronous adn mutable</li>
                <li>Props can be accessed by the child compone</li>
                <li>State holds information about the components.</li>
                <li>States can be used for rendering dynamic changes with the component.</li></p>
            </div>
            <div className="faq-card">
                <h2>Use of useEffect in react?</h2>
                <p>useEffect(callback, dependencies) invokes the callback after initial mounting, and on later renderings, if any value inside dependencies has changed.</p>
            </div>
        </div>
    );
};

export default Faq;