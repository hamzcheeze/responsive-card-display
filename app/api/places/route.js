import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const places = [
            {
                id: 1,
                name: "Saint Mopierre",
                description: "Saint Mopierre is a large city, known for being the birthplace of a music genre.",
                image: "/images/saint-mopierre.jpg",
                tagIds: [1, 2]
            },
            {
                id: 2,
                name: "Phuket",
                description: "Phuket is Thailand's largest island, famous for its stunning beaches, crystal-clear waters, and vibrant cultural heritage.",
                image: "/images/phuket.jpg",
                tagIds: [3, 4, 5]
            }
        ];

        return NextResponse.json(places, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch places' },
            { status: 500 }
        );
    }
}