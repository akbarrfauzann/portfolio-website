import { FaArrowRight } from "react-icons/fa";

const WorkItems = ({ item }) => {
  return (
    <div>
      <div className="work-card" key={item.id}>
        <img src={item.image} alt={item.title} className="work-img" />
        <h3 className="work-title">{item.title}</h3>
        <div className="work-tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="work-tag-name">
              {tag}
            </span>
          ))}
        </div>
        <a href={item.link} target="_blank" className="work-button">
          Demo <FaArrowRight className="work-button-icon" />
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
