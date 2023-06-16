import React from 'react';
import './Footer.css'
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="col">
                        <a className="f-a" href="https://www.knime.com/">Официальный сайт knime.com</a>
                        <a className="f-a" href="https://docs.knime.com/">Полная документация</a>
                        <a className="f-a" href="https://www.knime.com/download">Скачать Knime Analytics Platform</a>
                        <a className="f-a" href="https://www.knime.com/getting-started-guide">Быстрый старт</a>
                    </div>
                    <div className="col">
                        <a className="f-a" href="https://hub.knime.com/">Community Hub</a>
                        <a className="f-a" href="https://www.knime.com/blog">Knime Blog</a>
                    </div>
                    <div className="col">
                        <a className="f-a" href="https://t.me/knime_russia">TG: Knime Russia</a>
                        <a className="f-a" href="https://t.me/knime_ru_group">TG: Knime Russia Chat</a>
                    </div>
                    <div className="col">
                        <p className="f-a" style={{padding: '0', margin: '0'}}>
                            Все права на программу Knime Analytics System принадлежат KNIME AG<br/>Talacker 50<br/>8001
                            Zurich, Switzerland<br/>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
};
