import "./MooviesPaginate.css";

const PaginateTile = ({ text, active = false }) => {
  const activeClass = active ? "active" : "";
  return <span className={`moovies-paginate-tile ${activeClass}`}>{text}</span>;
};

const GenerateTiles = ({ pages = 2, page = 1 }) => {
  let firstText = "";
  let secondText = "";
  let thirdText = "";

  console.log({ page });

  if (page === 1) {
    firstText = 1;
    secondText = 2;
    thirdText = 3;
  }

  if (page > 1 && page < pages) {
    firstText = page - 1;
    secondText = page;
    thirdText = page + 1;
  }

  if (page === pages) {
    firstText = page - 2;
    secondText = page - 1;
    thirdText = page;
  }

  const ListHigherThan3 = (
    <>
      <PaginateTile text={firstText} />
      <PaginateTile text={secondText} />
      <PaginateTile text={thirdText} />
    </>
  );

  return ListHigherThan3;
};

const MoovesPaginate = (props) => {
  const maxSize = 240;
  const step = 20;
  const page = 12;
  const pages = Math.ceil(maxSize / step);

  return (
    <div className="moovies-paginate">
      <PaginateTile text={1} />
      <span className="paginate-separator">|</span>
      <GenerateTiles pages={pages} page={page} />
      <span className="paginate-separator">|</span>
      <PaginateTile text={pages} />
    </div>
  );
};

export default MoovesPaginate;
