
const Total =({course})=> {
    return (
        <>
        {course.parts.exercises.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0)}
        </>
)
}

export default Total