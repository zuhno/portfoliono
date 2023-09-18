interface IProps {
  title: string;
  description: string;
  mainImage: string;
  scopes: string[];
  specs: string[];
}

const Content = ({ title, description, mainImage, scopes, specs }: IProps) => {
  return (
    <div className="content">
      <div className="title">{title}</div>
      <div className="desc">- {description}</div>
      <div className="info">
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element -- . */}
          <img alt="project_img" src={mainImage} />
        </div>
        <div className="history">
          <div>
            <p>Work Scope</p>
            <ul>
              {scopes.map((scope, idx) => (
                <li key={idx}>{scope}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Tech Spec</p>
            <ul>
              {specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
