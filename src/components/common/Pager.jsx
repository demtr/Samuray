// Формирование строки страниц
import classNames from "classnames";
import c from "./Pager.module.css";
import React from "react";

const Pager = ({totItems, pageSize, currentPage, goToPage}) => {
    let totPages = Math.ceil(totItems / pageSize);
    let pages = [];
    let firstPage, keymax;

    if (currentPage - 10 < 1) firstPage = 1;
    else firstPage = currentPage - 10;
    for (let p = firstPage; p <= firstPage + (totPages - firstPage > 20 ? 20 : totPages - firstPage); p++) {
        pages.push(p);
    }
    keymax = pages[pages.length - 1] + 1;
    pages = pages.map(p => <span onClick={() => { goToPage(p) }} key={p}
                                 className={classNames({  [c.actLink]: p === currentPage,
                                                                [c.pageLink]: p !== currentPage
                                                             }
                                            )}>
                            {p}</span>);
    if (firstPage > 1) {
        let m20 = firstPage - 10 < 1 ? 1 : firstPage - 10;
        pages = [<span key="-1">
                    <span onClick={() => {goToPage(m20);}}
                        className={classNames(c.pageLink, c.jump)}>{m20 > 1 ? '-20' : m20} &lt;&lt;
                    </span>&nbsp;
                 </span>, ...pages]
    }
    if (currentPage < totPages - 10) {
        let p20 = currentPage + 20 > totPages ? totPages : currentPage + 20;
        pages = [...pages, <span key={keymax}>&nbsp;
                                <span onClick={() => {goToPage(p20);}}
                                      className={classNames([c.pageLink, c.jump])}> &gt;&gt; +20
                                </span>
                           </span>]
    }
    return <div className={c.pager}>{pages}</div>;
};

export default Pager;