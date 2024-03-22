

const Job = ({ job }) => {
    const { logo } = job;
    return (
        <div>
            <div className=" w-32 h-16">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Job;