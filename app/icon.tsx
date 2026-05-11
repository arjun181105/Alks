import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: '#f59e0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <polygon points="13,2 6,13 11,13 11,22 18,11 13,11" fill="#0a0f1e" strokeWidth="0" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
