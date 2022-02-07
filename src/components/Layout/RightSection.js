import classes from "./RightSection.module.css";
import photo from "../../files/photo.jpg";
const RightSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.circularPortrait}>
        <img src={photo} alt="resume_photo" />
      </div>
      <div className={classes.info}>
        <h5>harlovme@gmail.com</h5>
        <h5>+7 916 241 45 92</h5>
      </div>
      <div>
        <h4>Инструменты и Технологии</h4>
        <ul>
          <li>HTML/CSS(SASS)</li>
          <li>CSS-Modules/Styled-Components/React transition Group</li>
          <li>Адаптивная верстка (flexbox, grid)</li>
          <li>JavaScript (ES6, JQuery, Bootstrap)</li>
          <li>React (Hooks, Redux/Toolkit, Router)</li>
          <li>Git (Github)</li>
          <li>Axios</li>
          <li>Webpack</li>
        </ul>
      </div>
      <div>
        <h4>Языки</h4>
        <ul>
          <li>Русский (родной)</li>
          <li>Английский (C1)</li>
        </ul>
      </div>
      <div>
        <h4>Ссылки</h4>
        <ul>
          <li>
            <a href="https://github.com/devianse" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://bali-80a86.web.app/" target="_blank">
              Bali Landing
            </a>
          </li>
          <li>
            <a href="https://stool-group-e10b1.web.app/" target="_blank">
              Stool Group
            </a>
          </li>

          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default RightSection;
