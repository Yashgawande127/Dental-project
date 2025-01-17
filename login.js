/* General Reset */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #11cb30, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
}

/* Login Container */
.login-container {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
    backdrop-filter: blur(10px);
    position: relative;
}

/* Close Button */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.close-btn:hover {
    transform: scale(1.2);
    color: #ff4c4c;
}

/* Form Styles */
#login-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #fff;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.input-group input {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
}

.input-group input:focus {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Button Styles */
.login-btn {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    background: #6a11cb;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.login-btn:hover {
    background: #2575fc;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

/* Error Message */
.error-message {
    color: #ff4c4c;
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    display: none;
}

/* Signup Option */
.signup-option {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #fff;
}

.signup-option a {
    color: #6a11cb;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
}

.signup-option a:hover {
    color: #2575fc;
}

/* Responsive Design */
@media (max-width: 768px) {
    .login-container {
        padding: 1.5rem;
    }
}
