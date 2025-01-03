import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const tags = [
            {
                id: 1,
                name: "Binnebeast"
            },
            {
                id: 2,
                name: "Goolu"
            },
            {
                id: 3,
                name: "Island"
            },
            {
                id: 4,
                name: "Beach"
            },
            {
                id: 5,
                name: "Culture"
            }
        ];

        return NextResponse.json(tags, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch tags' },
            { status: 500 }
        );
    }
}