import { useSelector } from "react-redux";

const MainPage = () => {
  const title = useSelector((store) => store.site.title);

  return (
    <div>
      <h2>Main Page</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor
        urna nunc id. Scelerisque eleifend donec pretium vulputate sapien nec.
        Cursus sit amet dictum sit amet justo donec enim diam. Nisl purus in
        mollis nunc sed. Viverra aliquet eget sit amet tellus. Ullamcorper
        dignissim cras tincidunt lobortis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor
        urna nunc id. Scelerisque eleifend donec pretium vulputate sapien nec.
        Cursus sit amet dictum sit amet justo donec enim diam. Nisl purus in
        mollis nunc sed. Viverra aliquet eget sit amet tellus. Ullamcorper
        dignissim cras tincidunt lobortis. Pulvinar mattis nunc sed blandit
        libero. Risus at ultrices mi tempus imperdiet. Pellentesque massa
        placerat duis ultricies lacus. Velit scelerisque in dictum non
        consectetur a. Netus et malesuada fames ac turpis egestas sed. Lectus
        mauris ultrices eros in cursus turpis massa. Amet commodo nulla facilisi
        nullam. Imperdiet massa tincidunt nunc pulvinar sapien et. Enim praesent
        elementum facilisis leo vel fringilla est ullamcorper. Quis viverra nibh
        cras pulvinar. Eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci.
      </p>
      <h4>{title}</h4>
    </div>
  );
};

export default MainPage;
