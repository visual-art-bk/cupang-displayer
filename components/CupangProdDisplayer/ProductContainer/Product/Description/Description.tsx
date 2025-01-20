const PREFIX = '_prodDesc-ne-32';

type typeForProdDescription = {
  content: string;
  id: string;
};
export default function Description(props: typeForProdDescription) {
  const { content, id } = props;

  return (
    <div
      className="prod-description"
      itemID={id}
      prefix={PREFIX}
    >
      <p>{content}</p>
    </div>
  );
}
