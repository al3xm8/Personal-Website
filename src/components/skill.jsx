
function Skill (props) {
    return (

        <div id='skills-box'>
          <img src={props.logo} id='skill-img' alt='logo'/>
          <p>{props.text}</p>
        </div>
    )
}

export default Skill;