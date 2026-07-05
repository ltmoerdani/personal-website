import { NextResponse } from 'next/server';

const EXTENSION_ID = 'ltmoerdani.opencode-copilot-chat';

interface MarketplaceStatistic {
  statisticName: string;
  value: number;
}

interface MarketplaceExtension {
  statistics?: MarketplaceStatistic[];
  displayName?: string;
  shortDescription?: string;
}

interface MarketplaceResult {
  extensions?: MarketplaceExtension[];
}

interface MarketplaceResponse {
  results?: MarketplaceResult[];
}

export async function GET() {
  try {
    const res = await fetch(
      'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;api-version=6.0-preview.1',
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [{ filterType: 7, value: EXTENSION_ID }],
            },
          ],
          flags: 914,
        }),
        next: { revalidate: 3600 }, // revalidate every hour
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { installs: 5734, rating: 5.0 },
        { status: 200 },
      );
    }

    const data: MarketplaceResponse = await res.json();
    const ext = data.results?.[0]?.extensions?.[0];
    const stats = ext?.statistics ?? [];

    const installs = stats.find((s) => s.statisticName === 'install')?.value ?? 5734;
    const rating = stats.find((s) => s.statisticName === 'averagerating')?.value ?? 5.0;

    return NextResponse.json({
      installs: Math.round(installs),
      rating: Number(rating.toFixed(1)),
    });
  } catch {
    // Graceful fallback on any error
    return NextResponse.json({ installs: 5734, rating: 5.0 }, { status: 200 });
  }
}
