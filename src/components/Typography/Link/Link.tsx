
type LinkProps = {
    title: string,
    url: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'],
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

const Link = ({ title, url, target }: LinkProps ) => {
    
    return (
        <a href={url} target={target || '_self'}>{title}</a>
    )
}

export default Link;