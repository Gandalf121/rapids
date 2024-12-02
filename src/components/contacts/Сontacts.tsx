import { ReactComponent as Phone } from "./svg/solar_phone-outline.svg";
import { ReactComponent as Location } from "./svg/ion_location-outline.svg";
import { ReactComponent as Time } from "./svg/ion_time-outline.svg";

const Contacts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "20rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <Time />
        <div>
          <p>График работы</p>
          <p>пн-сб 09:00-18:00</p>
          <p>вс: выходной</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Location />
        <div>
          <p>Адрес</p>
          <p>г. Гродно ул. Буденного,</p>
          <p>д.48а, каб. 418</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Phone />
        <div>
          <p>Контакты</p>
          <p>+375292973405</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
