import Header from "../components/Header"
import Footer from "../components/Footer"
import Assets from "../components/Assets"
import Button from "../components/Button";

const Account = () => {
  return (
    <div>
      <Header />
      <div id = 'main'>
        <section className="major row flex">
            <Button
            cname = 'button'
            size = 'large'
            text = ''
            />
            <Button
            cname = 'button'
            size = 'large'
            text = ''
            />
            <Button
            cname = 'button'
            size = 'large'
            text = ''
            />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Account