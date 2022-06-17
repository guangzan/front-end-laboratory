import Header from './header';
import Footer from './footer';

export default function (props: any) {
  return (
    <>
      <Header />
      <main className="mt-4 mx-auto w-11/12 lg:w-4/5">{props.children}</main>
      <Footer />
    </>
  );
}
