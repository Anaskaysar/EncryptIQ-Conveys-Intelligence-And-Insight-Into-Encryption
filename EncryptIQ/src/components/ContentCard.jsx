// ContentCard.jsx
import PropTypes from 'prop-types';

const ContentCard = ({ children }) => (
  <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 my-4 hover:shadow-lg transition-shadow duration-300">
    {children}
  </div>
);

ContentCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentCard;

