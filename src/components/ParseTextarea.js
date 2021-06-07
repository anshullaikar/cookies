const ParseTextarea = ({ value = [], onChange }) => {
    const [text, setText] = value.join("\n");
    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
        onChange(value.split("\n"));
    };

    return <textarea onChange={handleChange} value={text} />;
};

export default ParseTextarea;
