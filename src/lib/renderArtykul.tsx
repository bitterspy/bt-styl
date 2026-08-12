// Prosty renderer treści artykułów (format zbliżony do markdown: **pogrubienie**,
// listy "- " i "1. ", tabele "|"). Wydzielony poza Porady.tsx (który ma 'use client')
// żeby mógł być bezpiecznie importowany też w server components (podstrony /porady/[slug]).
export function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <div key={i} className="h-2" />;

    if (/^\*\*(.+)\*\*$/.test(line.trim())) {
      const match = line.trim().match(/^\*\*(.+)\*\*$/);
      return <p key={i} className="font-bold text-gray-800 mt-3 mb-1">{match![1]}</p>;
    }

    if (/^- /.test(line.trim())) {
      const item = line.trim().slice(2);
      return (
        <div key={i} className="flex gap-2 ml-2">
          <span className="shrink-0 mt-1 text-[#c0392b]">•</span>
          <span>{renderInline(item)}</span>
        </div>
      );
    }

    if (/^\d+\. /.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\. (.+)/);
      if (match) {
        return (
          <div key={i} className="flex gap-2 ml-2">
            <span className="shrink-0 font-bold text-[#c0392b]">{match[1]}.</span>
            <span>{renderInline(match[2])}</span>
          </div>
        );
      }
    }

    if (line.trim().startsWith('|')) {
      return <p key={i} className="text-xs font-mono bg-gray-50 px-2 py-0.5 rounded">{line.trim()}</p>;
    }

    return <p key={i}>{renderInline(line)}</p>;
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (match) return <strong key={i} className="font-semibold text-gray-800">{match[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}
