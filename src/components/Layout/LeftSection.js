import classes from "./LeftSection.module.css";
const LeftSection = () => {
  return (
    <section className={classes.section}>
      <div>
        <h1>Михаил Харлов</h1>
        <h2>Junior React Developer</h2>
      </div>
      <div>
        <h3>Опыт</h3>
        <ul>
          <li>
            <h4>Веб Разработчик</h4>
            <h5>AZ Express</h5>
            <h6>Сентябрь 2021 - Декабрь 2021</h6>
            <p>React(hooks,Redux/Toolkit, router v6)</p>
            <p>JS (ES6, Jquery)</p>
            <p>React Transition Group/CSS-Modules</p>
            <p>Git(GitHub)</p>
            <p>Axios</p>
          </li>
          <li>
            <h4>Веб разработчик</h4>
            <h5>Web Innovation</h5>
            <h6>Сентябрь 2019 - Октябрь 2020</h6>
            <p>
              Создание сайтов, поддержка текущих проектов и дополнение их новым
              функционалом.
            </p>
            <p>Работа в команде с использованием контроля версий</p>
            <p>HTML/CSS(SASS)</p>
            <p>Flexbox,Grid</p>
            <p>JS(ES6)</p>
            <p>Git(GitHub)</p>
            <p>Jquery, bootstrap</p>
            <p>Webpack, parcel.js</p>
            <p>React(hooks,Redux/Toolkit, router v5)</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeftSection;
