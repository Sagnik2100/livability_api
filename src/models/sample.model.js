// In a real application, this would interface with a database (e.g., Mongoose, Sequelize)
const samples = [
    { id: '1', name: 'Sample A', description: 'First sample' },
    { id: '2', name: 'Sample B', description: 'Second sample' }
];

const getAll = async () => {
    return samples;
};

const getById = async (id) => {
    return samples.find(s => s.id === id) || null;
};

const create = async (data) => {
    const newSample = {
        id: String(samples.length + 1),
        ...data
    };
    samples.push(newSample);
    return newSample;
};

module.exports = {
    getAll,
    getById,
    create
};
