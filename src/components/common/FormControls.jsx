import style from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div>
        <div className={style.formControl + " " + (hasError ? style.error : "") }>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span className={style.error}>{meta.error}</span>}
    </div>;
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <span>
        <span className={style.formControl + " " + (hasError ? style.error : "") }>
            <input {...input} {...props}/>
        </span>
        {hasError && <span className={style.error}>{meta.error}</span>}
    </span>;
}