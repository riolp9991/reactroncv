import "./MooviesPaginate.css";

const PaginateTile = ({ text, active = false }) => {
  const activeClass = active ? "active" : "";
  return <span className={`moovies-paginate-tile ${activeClass}`}>{text}</span>;
};

const GenerateTiles = ({ pages = 2, page = 1 }) => {
  let firstText = 1;
  let secondText = 2;
  let thirdText = 3;

  console.log({ page });

  if (pages > 2) {
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
  }

  const First = () => (
    <PaginateTile active={page === firstText ? true : false} text={firstText} />
  );
  const Second = () => (
    <PaginateTile
      active={page === secondText ? true : false}
      text={secondText}
    />
  );
  const Third = () => (
    <PaginateTile active={page === thirdText ? true : false} text={thirdText} />
  );

  const ListHigherThan3 = (
    <>
      <First />
      <Second />
      <Third />
    </>
  );
  const ListTwo = (
    <>
      <First />
      <Second />
    </>
  );

  const getReturn = () => {
    if (pages >= 3) return ListHigherThan3;
    if (pages == 2) return ListTwo;
    if (pages < 2) return <First />;
  };

  return getReturn();
};

const MoovesPaginate = (props) => {
  const maxSize = 80;
  const step = 20;
  const page = 2;
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
