import '../css/SectionHeader.css'

function SectionHeader(props) {
    return(
        <div class="section-header">
            {props.text}
        </div>
    )
}

export default SectionHeader;
