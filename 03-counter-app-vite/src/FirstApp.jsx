import PropTypes from "prop-types";
export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
};

FirstApp.defaultProps ={
  title: 'No hay titulo',
  subTitle: 'No hat subtitulo',
  name: 'Aslly Zuñiga'

}
