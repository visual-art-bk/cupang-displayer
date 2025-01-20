import './title.module.css'

const PREFIX = '_title-mr-39';
type typeForProdHeading = {
  content: string;
  id: string;
  titleNumber: string;
  index?: number;
};
export default function Title(props: typeForProdHeading) {
  const { content, id, index,  titleNumber } = props;

  return (
    <div className="title"  itemID={id} prefix={PREFIX}>
      <span>
        {titleNumber} {content}
      </span>
    </div>
  );
}
