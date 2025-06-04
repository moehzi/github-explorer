import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

interface Repository {
  id: number
  full_name: string
  description: string
  stargazers_count: number
  html_url: string
}

function Favorites() {
  const t = useTranslations()
  const queryClient = useQueryClient()
  const { data: favorites = [] } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => {
      const stored = localStorage.getItem('favorites')
      return stored ? JSON.parse(stored) : []
    },
  })

  const removeFavorite = (repoId: number) => {
    const newFavorites = favorites.filter((repo: Repository) => repo.id !== repoId)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    // Invalidate the favorites query to trigger a refetch
    queryClient.invalidateQueries({ queryKey: ['favorites'] })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{t('favorites.title')}</h1>

      {favorites.length === 0 ? (
        <div className="text-gray-500">{t('favorites.noFavorites')}</div>
      ) : (
        <div className="space-y-4">
          {favorites.map((repo: Repository) => (
            <div key={repo.id} className="p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {repo.full_name}
                    </a>
                  </h3>
                  <p className="text-gray-600 mt-2">{repo.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    {t('home.stars', { count: repo.stargazers_count.toLocaleString() })}
                  </div>
                </div>
                <button
                  onClick={() => removeFavorite(repo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  {t('favorites.remove')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
