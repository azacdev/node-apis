const getAllJobs = (req, res) => {
  res.send("get all jobs");
};

const getJob = () => {
  res.send("get jobs");
};

const createJob = () => {
  res.send("create job");
};

const updateJob = () => {
  res.send("update job");
};

const deleteJob = () => {
  res.send("delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
