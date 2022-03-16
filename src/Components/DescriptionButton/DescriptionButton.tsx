import s from './DescriptionButton.module.css'

export const DescriptionButton=()=> {
    return (
        <button className={`${s.button} ${s.active}`}>
            <span>Description</span>
            <p> &gt; </p>
        </button>
    )
}