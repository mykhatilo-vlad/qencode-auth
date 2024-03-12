import { ReactNode } from "react";
import {StandardLonghandProperties} from 'csstype';

type ParagraphProps = {
    children: ReactNode,
    align?: StandardLonghandProperties<string | number, string & {}>['textAlign'],
}

const Paragraph = ({children, align}: ParagraphProps) => {

    return (
        <p style={{textAlign: align || 'left'}}>{children}</p>
    );
}

export default Paragraph;