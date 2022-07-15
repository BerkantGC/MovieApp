export default function(data)
{
    if(data != null)
    {
        return Object.keys(data).map(key => {
        return {
            id : key,
            ...data[key],
        }}
        )
    }
}