// Формирование строки страниц
import classNames from "classnames";
import c from "./Pager.module.css";
import React from "react";

const Pager = (props) => {
    let totPages = Math.ceil(props.totUsers / props.pageSize);
    let pages = [];
    let firstPage, keymax;

    if (props.currentPage -10 < 1) firstPage=1;
    else firstPage=props.currentPage -10;
    for (let p = firstPage; p <= firstPage+(totPages-firstPage>20?20:totPages-firstPage); p++) {
        pages.push(p);
    }
    keymax = pages[pages.length-1]+1;
    let clLink = (p) => {
        let cn;
        if (p === props.currentPage) cn = classNames([c.actLink]);
        else cn = classNames([c.pageLink]);
        return cn;
    };
    pages = pages.map(p => <span onClick={() => {props.goToPage(p)}}
                                 key={p} className={clLink(p)}>{p} </span>);
    if (firstPage>10) {
        let m20 = firstPage-10<1? 1 :firstPage-10;
        pages = [<span key={"-1"}><span onClick={() => {props.goToPage(m20)}}
                             className={classNames([c.pageLink, c.jump])}>-20 &lt;&lt; </span> &nbsp;</span>,...pages]
    }
    if (props.currentPage < totPages-10) {
        let p20 = props.currentPage+20 > totPages? totPages :props.currentPage+20;
        pages = [...pages, <span key={keymax}>&nbsp;<span onClick={() => {props.goToPage(p20)}}
                                             className={classNames([c.pageLink, c.jump])}> &gt;&gt; +20</span></span>]
    }
    return <div>{pages}</div>;
};

export default Pager;