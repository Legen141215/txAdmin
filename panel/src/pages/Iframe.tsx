type Props = {
    legacyUrl: string;
};

export default function Iframe({ legacyUrl }: Props) {
    const searchParams = location.search ?? '';
    return (
        <iframe id="legacyPageiframe"
            src={`./legacy/${legacyUrl}${searchParams}`}
            className="w-full"
        ></iframe>
    );
}
