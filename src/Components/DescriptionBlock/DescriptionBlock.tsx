import s from './DescriptionBlock.module.css'

type DescriptionBlockPropsType = {
    description: string,
    isOpened: boolean,
    idBlocks: string
}

export const DescriptionBlock=(props: DescriptionBlockPropsType)=> {
    return (<div className={`${s.description__wrapper} ${props.isOpened? s.active: ""}`}>
        <span>{props.description}</span>
    </div>)
}