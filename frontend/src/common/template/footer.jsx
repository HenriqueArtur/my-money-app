import React from 'react'

export default props => (
    <footer className="main-footer">
        <strong>
            Copyright &copy; 2020 - {(new Date().getFullYear())} | Feito com 💖 por <a href="http://www.henriqueartur.com" target="_blank" rel="noopener noreferrer">Henrique Artur</a>.
        </strong>
        <span className="social-icons">
            <a href="https://github.com/HenriqueArtur" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/henriqueartur/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
            </a>
            <a href="mailto:contato@henriqueartur.com" rel="noopener noreferrer">
                <i className="fa fa-envelope"></i>
            </a>
        </span>
    </footer>
)