import { useState, useEffect, useCallback } from "react"
import { createSupabaseClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Comment {
  id: number
  author_name: string
  content: string
  created_at: string
}

const PAGE_SIZE = 5

export default function GuestComments() {
  const supabase = createSupabaseClient()
  const [comments, setComments] = useState<Comment[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [authorName, setAuthorName] = useState("")
  const [content, setContent] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null)
  const [deletePassword, setDeletePassword] = useState("")
  const [deleteError, setDeleteError] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))

  const fetchComments = useCallback(async (page: number) => {
    setIsLoading(true)
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1
    const { count } = await supabase
      .from("comments")
      .select("*", { count: "exact", head: true })
    const { data } = await supabase
      .from("comments")
      .select("id, author_name, content, created_at")
      .order("created_at", { ascending: false })
      .range(from, to)
    setTotalCount(count ?? 0)
    setComments(data ?? [])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchComments(currentPage)
  }, [currentPage, fetchComments])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !content.trim() || !password.trim()) return
    setIsSubmitting(true)
    await supabase.from("comments").insert({
      author_name: authorName.trim(),
      content: content.trim(),
      password: password.trim(),
    })
    setContent("")
    setPassword("")
    setCurrentPage(1)
    await fetchComments(1)
    setIsSubmitting(false)
  }

  const openDeleteModal = (id: number) => {
    setDeleteTargetId(id)
    setDeletePassword("")
    setDeleteError("")
  }

  const closeDeleteModal = () => {
    setDeleteTargetId(null)
    setDeletePassword("")
    setDeleteError("")
  }

  const handleDelete = async () => {
    if (!deleteTargetId || !deletePassword.trim()) return
    setIsDeleting(true)
    setDeleteError("")
    const { data } = await supabase
      .from("comments")
      .select("id")
      .eq("id", deleteTargetId)
      .eq("password", deletePassword.trim())
      .single()
    if (!data) {
      setDeleteError("비밀번호가 일치하지 않습니다.")
      setIsDeleting(false)
      return
    }
    await supabase.from("comments").delete().eq("id", deleteTargetId)
    closeDeleteModal()
    setIsDeleting(false)
    const newCount = totalCount - 1
    const newTotalPages = Math.max(1, Math.ceil(newCount / PAGE_SIZE))
    const targetPage = currentPage > newTotalPages ? newTotalPages : currentPage
    setCurrentPage(targetPage)
    await fetchComments(targetPage)
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
  }

  return (
    <div className="col-span-full border-t border-pink-200/35 px-7 py-6">
      <div className="mb-4 text-center text-[15px] tracking-wider text-[var(--text-sub)]">
        축하 메시지
      </div>
      <form onSubmit={handleSubmit} className="mb-5 flex flex-col gap-2.5">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="이름"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            maxLength={20}
            className="flex-1 rounded-xl border border-pink-200/50 bg-white/80 px-4 py-2.5 text-[16px] text-[var(--text-main)] placeholder:text-[var(--text-sub)]/60 outline-none transition-colors focus:border-[var(--accent)]"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={20}
            className="w-[110px] rounded-xl border border-pink-200/50 bg-white/80 px-4 py-2.5 text-[16px] text-[var(--text-main)] placeholder:text-[var(--text-sub)]/60 outline-none transition-colors focus:border-[var(--accent)]"
          />
        </div>
        <textarea
          placeholder="축하 메시지를 남겨주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={300}
          rows={3}
          className="w-full resize-none rounded-xl border border-pink-200/50 bg-white/80 px-4 py-2.5 text-[16px] text-[var(--text-main)] placeholder:text-[var(--text-sub)]/60 outline-none transition-colors focus:border-[var(--accent)]"
        />
        <Button
          type="submit"
          disabled={isSubmitting || !authorName.trim() || !content.trim() || !password.trim()}
          className="self-end"
        >
          {isSubmitting ? "등록 중..." : "등록"}
        </Button>
      </form>
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <p className="py-6 text-center text-[15px] text-[var(--text-sub)]">불러오는 중...</p>
        ) : comments.length === 0 ? (
          <p className="py-6 text-center text-[15px] text-[var(--text-sub)]">첫 번째 축하 메시지를 남겨주세요!</p>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-pink-200/30 bg-white/60 px-4 py-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[17px] font-bold text-[var(--text-main)]">{c.author_name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[var(--text-sub)]">{formatDate(c.created_at)}</span>
                  <button
                    type="button"
                    onClick={() => openDeleteModal(c.id)}
                    className="text-[12px] text-[var(--text-sub)]/60 transition-colors hover:text-red-400"
                    aria-label="댓글 삭제"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="whitespace-pre-wrap break-words text-[16px] leading-relaxed text-[var(--text-main)]">{c.content}</p>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-[14px] text-[var(--text-sub)] transition-colors hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-30"
            )}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-[14px] transition-colors",
                page === currentPage ? "bg-[var(--accent)] font-semibold text-white" : "text-[var(--text-sub)] hover:bg-[var(--accent-soft)]"
              )}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[14px] text-[var(--text-sub)] transition-colors hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      )}
      {deleteTargetId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={closeDeleteModal}
          onKeyDown={(e) => e.key === "Escape" && closeDeleteModal()}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-6 w-full max-w-[320px] rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4 text-center text-[15px] font-semibold text-[var(--text-main)]">비밀번호를 입력해주세요</p>
            <input
              type="password"
              placeholder="비밀번호"
              value={deletePassword}
              onChange={(e) => {
                setDeletePassword(e.target.value)
                setDeleteError("")
              }}
              className="mb-2 w-full rounded-xl border border-pink-200/50 bg-white px-4 py-2.5 text-[16px] text-[var(--text-main)] placeholder:text-[var(--text-sub)]/60 outline-none transition-colors focus:border-[var(--accent)]"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleDelete()}
            />
            {deleteError && <p className="mb-2 text-center text-[13px] text-red-400">{deleteError}</p>}
            <div className="mt-3 flex gap-2">
              <Button type="button" variant="outline" className="flex-1" onClick={closeDeleteModal}>
                취소
              </Button>
              <Button
                type="button"
                className="flex-1 bg-red-400 hover:bg-red-500"
                disabled={isDeleting || !deletePassword.trim()}
                onClick={handleDelete}
              >
                {isDeleting ? "삭제 중..." : "삭제"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
