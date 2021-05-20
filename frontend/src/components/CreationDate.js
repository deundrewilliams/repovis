import '../css/CreationDate.css';

export default function CreationDate(props) {

    let date =  new Date(props.creation_date);

    let current_date = new Date();

    let year_diff = Math.abs(date.getFullYear() - current_date.getFullYear());
    let month_diff = Math.abs(date.getMonth() - current_date.getMonth());
    let day_diff = Math.abs(date.getDay() - current_date.getDay());

    let isBirthday = (current_date.getMonth() === date.getMonth() && current_date.getDay() === date.getDay());

    let age_info = ''

    // If greater than 1 year, display years old
    if (year_diff >= 1)
    {
        age_info = year_diff - 1 + " years";
    }

    // If greater than 1 month, display months old
    else if (month_diff >= 1)
    {
        age_info = month_diff - 1 + " months";
    }

    // Else display days old
    else
    {
        age_info = day_diff + " days";
    }

    let final_info = isBirthday ? 'Birthday # ' + year_diff + '!' : age_info + " old";

    return(
        <div className="creation-date">
            <p>{final_info}</p>
            <p>Created On: {date.toLocaleDateString()}</p>
        </div>
    )


}
