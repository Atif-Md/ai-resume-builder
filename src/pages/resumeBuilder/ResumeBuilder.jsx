import { useLocation } from "react-router-dom";

const ResumeBuilder = () => {

    const location = useLocation();
    const selectedTemplate = location.state?.template || "Modern";

    return (
        <div>
            Resume Builder Page
            <p>Selected Template: {selectedTemplate}</p>
        </div>
    )
}

export default ResumeBuilder;