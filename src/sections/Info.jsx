import SectionTitle from "../components/SectionTitle";
import Map from "../components/Map";
import Share from "../components/Share";
const Info = () => {
    return (
        <section>
            <div className="inner">
                <SectionTitle
                    subTitle="Location"
                    title="오시는 길"
                />
                <Map/>
                <Share/>
            </div>
        </section>
    )
}

export default Info;