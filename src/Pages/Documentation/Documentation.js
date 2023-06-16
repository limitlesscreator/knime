import React from 'react';
import './Documentation.css'

export const Documentation = () => {
    return (
        <>
            <section className="u-align-center u-clearfix u-white u-section-1" id="sec-3bb9">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <h1 className="u-align-left u-text u-text-grey-75 u-text-1">
                        KNIME<br/>Analytics Platform<br/>
                    </h1>
                    <p className="u-align-left u-text u-text-2">версия 4.7</p>
                </div>
            </section>
            <section className="u-align-center u-clearfix u-grey-5 u-section-2" id="sec-3687">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-table u-table-responsive u-table-1">
                        <table className="u-table-entity">
                            <colgroup>
                                <col width="88.9%"/>
                                    <col width="11.1%"/>
                            </colgroup>
                            <tbody className="u-table-body">
                            <tr style={{height: '25px'}}>
                                <td className="u-custom-font u-table-cell u-text-font u-table-cell-1">KNIME Analytics
                                    Platform Руководство по установке
                                </td>
                                <td className="u-align-center u-table-cell u-table-cell-2">
                                    <a className="readBtn" href="documents/installation_guide.html">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px'}}>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-3">KNIME
                                    Обзор рабочего пространства
                                </td>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                    <a className="readBtn" href="documents/workbench_guide.html">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px'}}>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-5">KNIME
                                    Советы по работе
                                </td>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                    <a className="readBtn" href="#" target="_blank">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px'}}>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-7">KNIME
                                    Расширения и интеграции
                                </td>
                                <td className="u-border-1 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                    <a className="readBtn" href="documents/extensions_and_integrations.html">ЧИТАТЬ</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
);
};
