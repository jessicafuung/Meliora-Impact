import {useEffect, useState} from "react";

function useLoading(loadingFunction) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load() {
        try {
            setLoading(true);
            setData(await loadingFunction());
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return {loading, error, data};
}

export function ListCases() {
    const {loading, error, data} = useLoading(async () => {
        return fetchJSON("/api/cases")
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
            </div>);
    }
    return (
        <div>
            {data.map((organization) => (
                <OrganizationCard key={organization._id} organizations={organization}/>
            ))}
        </div>);
}

function OrganizationCard({organizations: {name, category, info}}) {
    return <>
        <h1>{name}</h1>
        <h3>{category}</h3>
        {info.map((info) => (
            <InfoCard key={info._id} info={info}/>
        ))}
    </>
}

function InfoCard({info: {title, description, image}}) {
    return <>
        <h2>{title}</h2>
        <div>{description}</div>
        {image && <img src={image}/>}
    </>
}

async function fetchJSON(url) {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`failed to load${res.status}: ${res.statusText}`);
    }
    return await res.json();
}