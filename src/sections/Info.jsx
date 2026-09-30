import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";

const Info = () => {
    return (
        <section className="section">
            <div className="inner">
                <SectionTitle
                    subTitle="Location"
                    title="오시는 길"
                />
                <Map/>
            </div>
        </section>
    )
}

export default Info;